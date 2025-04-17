import React from "react";
// import './Home.css';
import { InputText } from "../UI/InputText/InputText";

export function Home() {
    return (
        <div>
            <h2 className="text-center my-4">CHƯƠNG TRÌNH QUẢN LÝ GIÀY</h2>
            <InputText label={'Name'} value={'addName'} onChange={('e')} placeholder={'Enter shoes name'}></InputText>
        </div>
    )
}