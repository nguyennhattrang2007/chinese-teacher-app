// src/pages/ExamHomework.js
import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { supabase } from "../supabase";

const Container = styled.div`
  padding: 3rem;
  text-align: center;
`;

const Heading = styled.h1`
  color: #4a90e2;
  margin-bottom: 1.5rem;
`;

const UploadSection = styled.div`
  margin-bottom: 2rem;
`;

const FileInputContainer = styled.div`
  margin-bottom: 1rem;
`;

const UploadButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
  }
`;

const ListSection = styled.div`
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
`;

const SubHeading = styled.h2`
  color: #333;
  margin-bottom: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 0.75rem;
  background-color: #f4f4f4;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 0.75rem;
  text-align: center;
`;

const DownloadButton = styled.button`
  padding: 0.25rem 0.75rem;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ExamHomework = () => {
  const { user } = useContext(AuthContext);
  const teacherEmail = process.env.REACT_APP_TEACHER_EMAIL;
  const isTeacher = user && user.email === teacherEmail;

  const [assignments, setAssignments] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Hàm lấy danh sách file từ bucket "assignments"
  const fetchAssignments = async () => {
    const { data, error } = await supabase.storage
      .from("assignments")
      .list("", { limit: 100, offset: 0 });
    if (error) {
      console.error("Error fetching assignments:", error);
      return;
    }
    console.log("Fetched assignments:", data);
    // Lấy publicUrl cho mỗi file
    const filesWithUrls = await Promise.all(
      data.map(async (file) => {
        const { data: publicUrlData, error: publicUrlError } = supabase.storage
          .from("assignments")
          .getPublicUrl(file.name);
        if (publicUrlError) {
          console.error(
            "Error getting public URL for file:",
            file.name,
            publicUrlError
          );
          return { ...file, publicUrl: null };
        }
        console.log("File:", file.name, "Public URL:", publicUrlData.publicUrl);
        return { ...file, publicUrl: publicUrlData.publicUrl };
      })
    );
    setAssignments(filesWithUrls);
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setUploading(true);
    try {
      // Tạo tên file: timestamp + "_" + tên gốc file
      const fileName = `${Date.now()}_${selectedFile.name}`;
      const { data, error } = await supabase.storage
        .from("assignments")
        .upload(fileName, selectedFile, {
          cacheControl: "3600",
          upsert: false,
        });
      if (data) console.log(data);
      if (error) throw error;
      alert("File uploaded successfully!");
      setSelectedFile(null);
      fetchAssignments();
    } catch (error) {
      console.error("Error uploading file:", error.message, error);
      alert("Upload failed: " + (error.message || JSON.stringify(error)));
    } finally {
      setUploading(false);
    }
  };

  const handleDownload = async (fileUrl, fileName) => {
    try {
      if (!fileUrl) {
        throw new Error(
          "Public URL is undefined. Check bucket settings and RLS policy."
        );
      }
      const response = await fetch(fileUrl);
      console.log("Response status:", response.status);
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error("Cannot fetch file: " + response.status);
      }
      const blob = await response.blob();
      console.log("Downloaded blob size:", blob.size, "type:", blob.type);
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      // Lấy tên file gốc: phần sau dấu "_"
      a.download = fileName.substring(fileName.indexOf("_") + 1);
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Download error:", error);
      alert("Download failed: " + error.message);
    }
  };

  return (
    <Container>
      <Heading>Đề Kiểm Tra/Bài Tập Về Nhà</Heading>
      {isTeacher && (
        <UploadSection>
          <FileInputContainer>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
          </FileInputContainer>
          <UploadButton
            onClick={handleUpload}
            disabled={uploading || !selectedFile}
          >
            {uploading ? "Đang tải lên..." : "Upload File"}
          </UploadButton>
        </UploadSection>
      )}
      <ListSection>
        <SubHeading>Danh sách bài tập:</SubHeading>
        {assignments.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <Th>Tên File</Th>
                <Th>Hành động</Th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((file) => (
                <tr key={file.name}>
                  <Td>{file.name.substring(file.name.indexOf("_") + 1)}</Td>
                  <Td>
                    <DownloadButton
                      onClick={() => handleDownload(file.publicUrl, file.name)}
                    >
                      Download
                    </DownloadButton>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>Chưa có bài tập nào.</p>
        )}
      </ListSection>
    </Container>
  );
};

export default ExamHomework;
