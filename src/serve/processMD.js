import { marked } from "marked";

// Function to process Markdown content
export const processMarkdown = (markdown) => {
    const tokens = marked.lexer(markdown); // Use marked to tokenize Markdown content
    let title = '';
    let firstImage = '';

    // Extract title
    tokens.some(token => {
        if (token.type === 'heading' && token.depth === 1) {
            title = token.text.trim();
            return true;
        }
    });



    // Extract first image URL
    tokens.some(token => {
        if (token.type === 'image') {
            firstImage = token.href;
            return true;
        }
    });

    return { title, firstImage };
};