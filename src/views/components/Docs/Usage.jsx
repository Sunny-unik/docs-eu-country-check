import React, { useContext, useEffect } from "react";
import Layout from "./Layout";
import { GlobalContext } from "../../GlobalContext";
import DocsPagination from "./DocsPagination";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Usage() {
  const exampleEU = `import { isEUCountry } from "eu-country-check";\n\n// using country name\nconsole.log(isEUCountry("Austria")); // { name: 'Austria', alpha2: 'AT', alpha3: 'AUT', numeric: '040' }\n\n// using alpha2 code\nconsole.log(isEUCountry("AT")); // { name: 'Austria', alpha2: 'AT', alpha3: 'AUT', numeric: '040' }\n\n// using alpha3 code\nconsole.log(isEUCountry("AUT")); // { name: 'Austria', alpha2: 'AT', alpha3: 'AUT', numeric: '040' }\n\n// using numeric code\nconsole.log(isEUCountry("040")); // { name: 'Austria', alpha2: 'AT', alpha3: 'AUT', numeric: '040' }\n\n// return undefined when country code or country name isn't part of EU\nconsole.log(isEUCountry("NO")); // undefined`;
  const exampleEEA = `import { isEEACountry } from "eu-country-check";\n\n// using country name\nconsole.log(isEEACountry("Norway")); // { name: 'Norway', alpha2: 'NO', alpha3: 'NOR', numeric: '578' }\n\n// using alpha2 code\nconsole.log(isEEACountry("NO")); // { name: 'Norway', alpha2: 'NO', alpha3: 'NOR', numeric: '578' }\n\n// using alpha3 code\nconsole.log(isEEACountry("NOR")); // { name: 'Norway', alpha2: 'NO', alpha3: 'NOR', numeric: '578' }\n\n// using numeric code\nconsole.log(isEEACountry("578")); // { name: 'Norway', alpha2: 'NO', alpha3: 'NOR', numeric: '578' }\n\n// return undefined when country code or country name isn't part of EEA\nconsole.log(isEEACountry("CA")); // undefined`;
  const setGlobalData = useContext(GlobalContext)[1];

  useEffect(() => {
    setGlobalData({ activePage: "usage" });
  }, []);

  return (
    <Layout>
      <h1>Usage Documentation</h1>
      <br />

      <h3>
        Here are some examples which check given country code or name is part of
        EU or not.
      </h3>
      <SyntaxHighlighter wrapLongLines language="javascript" style={dracula}>
        {exampleEU}
      </SyntaxHighlighter>
      <br />

      <h3>
        Here are some examples which check given country code or name is part of
        EEA or not.
      </h3>
      <SyntaxHighlighter wrapLongLines language="javascript" style={dracula}>
        {exampleEEA}
      </SyntaxHighlighter>

      <DocsPagination previousName="Installation" />
    </Layout>
  );
}
