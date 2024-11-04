import {parse, transform} from "@markdoc/markdoc";

export const markdownParser = (markdown) => {
    return transform(parse(markdown))
}