import React, { useRef, useState } from "react";
import { generateRecipe } from "../utils/getData";
import Typewriter from "typewriter-effect";
import Loader from "./Loader";

const ChatBot = () => {
  let defaultResult =
    "Get personalized recipe suggestions by simply entering the comma separated ingredients Ex. Milk,Rice.";
  const [recipe, setRecipe] = useState(defaultResult);
  const promptElement = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setRecipe("");
    const ingredients = promptElement.current.value;
    if (ingredients) {
      const result = await generateRecipe(ingredients);

      setRecipe(result);
    }
    setIsLoading(false);
    promptElement.current.value = "";
  };
  return (
    <div className="chat-window">
      <button
        className="btn btn-lg rounded-pill"
        style={{
          color: "#fff",
          backgroundColor: "#f77f00",
          fontFamily: "monospace",
          fontSize: "1em",
          padding: "0.7em",
        }}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Ask A.I.
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h2
            className="offcanvas-title"
            id="offcanvasRightLabel"
            style={{ fontWeight: "bold" }}
          >
            A.I. Chef
          </h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => setRecipe(defaultResult)}
          />
        </div>
        <div className="offcanvas-body d-flex flex-column justify-content-between">
          {isLoading && (
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <div
            className="result-window"
            style={{ fontFamily: "monospace" }}
            dangerouslySetInnerHTML={{ __html: recipe }}
          ></div>

          <div
            className="my-4 d-flex justify-content-center"
            style={{ height: "2.3em" }}
          >
            <input className="flex-fill" type="text" ref={promptElement} />
            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="submit"
                className="btn btn-primary btn-sm mx-2"
                style={{ width: "4em", border: "2px solid #000" }}
                onClick={handleSubmit}
              >
                <i className="bx bx-send"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
