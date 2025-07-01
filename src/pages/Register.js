import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { supabase } from "../supabase";

// Styled Components
const Container = styled.div`
  padding: 3rem;
  text-align: center;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: #4a90e2;
  text-shadow: 2px 2px 5px rgba(26, 255, 255, 0.5);
`;

const FormSection = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  &:disabled {
    background-color: #ccc;
  }
`;

const ErrorMessage = styled.p`
  color: #ff5f5f;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.p`
  color: #28a745;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Register = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Xử lý thay đổi input
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccess("");
    setError("");
  };

  // Xử lý submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setLoading(true);
    try {
      const { data, error } = await supabase.from("users").upsert(
        [
          {
            user_id: formData.name,
            email: formData.email || user.email,
            phone: formData.phone,
            name: formData.name || user.user_metadata?.name || "",
          },
        ],
        { onConflict: ["user_id"] }
      );

      if (error) {
        if (error.code === "23505") {
          // Xử lý lỗi khi email, phone hoặc name đã tồn tại
          setError(
            "Email, số điện thoại hoặc tên đã tồn tại. Vui lòng thử giá trị khác."
          );
        } else {
          setError(error.message);
        }
        setSuccess("");
        return;
      }

      setSuccess("Đăng ký thành công! Hãy đợi mình liên hệ nhé!");
      setError("");
    } catch (err) {
      console.error(err);
      setError("Đã có lỗi xảy ra. Vui lòng thử lại.");
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Heading>Đăng Ký</Heading>
      <FormSection>
        <div>
          {/* <p>Đã đăng nhập: {user.displayName}</p> */}
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Họ và tên"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Số điện thoại"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {success && <SuccessMessage>{success}</SuccessMessage>}
            <Button type="submit" disabled={loading}>
              {loading ? "Đang xử lý..." : "Đăng ký"}
            </Button>
          </form>
        </div>
      </FormSection>
    </Container>
  );
};

export default Register;
