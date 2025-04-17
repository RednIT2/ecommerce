import React from "react";
import './InputText.css';
import { Form } from "react-bootstrap";

export function InputText({ label, value, onChange, placeholder, type = "text" }) {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </Form.Group>
    );
}