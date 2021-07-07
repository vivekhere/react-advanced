// Using the useEffect hook we can encapsulate all the logic around a certain piece
// of functionality in a single place. We can extract the logic and put it in a
// different module and reuse it across different components.

import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;

    return () => {
      console.log("Clean up");
    };
  });
}
