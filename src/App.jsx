import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import toUnicode from "to-unicode";

function App() {
  const [inputText, setInputText] = useState("Type Text Here");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Function to convert text into various Unicode formats
  const convertToUnicode = (text) => {
    const textFormats = [
      "circled",
      "circledNeg",
      "fullWidth",
      "mathBold",
      "mathBoldFraktur",
      "mathBoldItalic",
      "mathBoldScript",
      "mathDouble",
      "mathMono",
      "mathSans",
      "mathSansBold",
      "mathSansBoldItalic",
      "mathSansItalic",
      "parenthesized",
      "squared",
      "squaredNeg",
      "rockDots",
      "smallCaps",
      "stroked",
      "inverted",
      "reversed",
    ];

    const convertedText = {};
    textFormats.forEach((format) => {
      convertedText[format] = toUnicode(text, format);
    });
    return convertedText;
  };

  const convertedText = convertToUnicode(inputText);
  return (
    <>
      <Container className="mt-5 centered">
        <Form>
          <Form.Group controlId="textInput">
            <Form.Label>Enter Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              value={inputText}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
        {Object.entries(convertedText).map(([format, text]) => (
          <div key={format} className="mt-3">
            <p>{text}</p>
          </div>
        ))}
      </Container>
    </>
  );
}

export default App;
