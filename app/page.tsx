"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
export default function Home() {
  const renderCount = useRef(1);
  const [language, setLanguage] = useState("font-baybayin");
  const [untranslatedText, setUntranslatedText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
    console.log("CURRENT: " + event.target.value);
    translate(untranslatedText, event.target.value);
  };

  const baybayinTranslate = (rawText: string) => {
    rawText = rawText.replace(/e/g, "i");
    rawText = rawText.replace(/o/g, "u");

    rawText = rawText.replace(/nang/g, "\u1708\u1705\u1714");
    rawText = rawText.replace(/ning/g, "\u1708\u1712\u1705\u1714");
    rawText = rawText.replace(/neng/g, "\u1708\u1712\u1705\u1714");
    rawText = rawText.replace(/nong/g, "\u1708\u1713\u1705\u1714");
    rawText = rawText.replace(/nung/g, "\u1708\u1713\u1705\u1714");

    rawText = rawText.replace(/nga/g, "\u1705");
    rawText = rawText.replace(/ngi/g, "\u1705\u1712");
    rawText = rawText.replace(/ngu/g, "\u1705\u1713");
    rawText = rawText.replace(/ng/g, "\u1705\u1714");
    // rawText = rawText.replace(/ng/g, '\u1708\u1705\u1714');

    rawText = rawText.replace(/ka/g, "\u1703");
    rawText = rawText.replace(/ga/g, "\u1704");
    rawText = rawText.replace(/ta/g, "\u1706");
    rawText = rawText.replace(/da/g, "\u1707");
    rawText = rawText.replace(/na/g, "\u1708");
    rawText = rawText.replace(/pa/g, "\u1709");
    rawText = rawText.replace(/ba/g, "\u170A");
    rawText = rawText.replace(/ma/g, "\u170B");
    rawText = rawText.replace(/ya/g, "\u170C");
    rawText = rawText.replace(/ra/g, "\u1707");
    rawText = rawText.replace(/la/g, "\u170E");
    rawText = rawText.replace(/wa/g, "\u170F");
    rawText = rawText.replace(/sa/g, "\u1710");
    rawText = rawText.replace(/ha/g, "\u1711");

    rawText = rawText.replace(/ki/g, "\u1703\u1712");
    rawText = rawText.replace(/gi/g, "\u1704\u1712");
    rawText = rawText.replace(/ti/g, "\u1706\u1712");
    rawText = rawText.replace(/di/g, "\u1707\u1712");
    rawText = rawText.replace(/ni/g, "\u1708\u1712");
    rawText = rawText.replace(/pi/g, "\u1709\u1712");
    rawText = rawText.replace(/bi/g, "\u170A\u1712");
    rawText = rawText.replace(/mi/g, "\u170B\u1712");
    rawText = rawText.replace(/yi/g, "\u170C\u1712");
    rawText = rawText.replace(/ri/g, "\u1707\u1712");
    rawText = rawText.replace(/li/g, "\u170E\u1712");
    rawText = rawText.replace(/wi/g, "\u170F\u1712");
    rawText = rawText.replace(/si/g, "\u1710\u1712");
    rawText = rawText.replace(/hi/g, "\u1711\u1712");

    rawText = rawText.replace(/ku/g, "\u1703\u1713");
    rawText = rawText.replace(/gu/g, "\u1704\u1713");
    rawText = rawText.replace(/tu/g, "\u1706\u1713");
    rawText = rawText.replace(/du/g, "\u1707\u1713");
    rawText = rawText.replace(/nu/g, "\u1708\u1713");
    rawText = rawText.replace(/pu/g, "\u1709\u1713");
    rawText = rawText.replace(/bu/g, "\u170A\u1713");
    rawText = rawText.replace(/mu/g, "\u170B\u1713");
    rawText = rawText.replace(/yu/g, "\u170C\u1713");
    rawText = rawText.replace(/ru/g, "\u1707\u1713");
    rawText = rawText.replace(/lu/g, "\u170E\u1713");
    rawText = rawText.replace(/wu/g, "\u170F\u1713");
    rawText = rawText.replace(/su/g, "\u1710\u1713");
    rawText = rawText.replace(/hu/g, "\u1711\u1713");

    rawText = rawText.replace(/a/g, "\u1700");
    rawText = rawText.replace(/i/g, "\u1701");
    rawText = rawText.replace(/u/g, "\u1702");

    rawText = rawText.replace(/k/g, "\u1703\u1714");
    rawText = rawText.replace(/g/g, "\u1704\u1714");
    rawText = rawText.replace(/t/g, "\u1706\u1714");
    rawText = rawText.replace(/d/g, "\u1707\u1714");
    rawText = rawText.replace(/n/g, "\u1708\u1714");
    rawText = rawText.replace(/p/g, "\u1709\u1714");
    rawText = rawText.replace(/b/g, "\u170A\u1714");
    rawText = rawText.replace(/m/g, "\u170B\u1714");
    rawText = rawText.replace(/y/g, "\u170C\u1714");
    rawText = rawText.replace(/r/g, "\u1707\u1714");
    rawText = rawText.replace(/l/g, "\u170E\u1714");
    rawText = rawText.replace(/w/g, "\u170F\u1714");
    rawText = rawText.replace(/s/g, "\u1710\u1714");
    rawText = rawText.replace(/h/g, "\u1711\u1714");

    setTranslatedText(rawText);
  };

  function hanunooTranslate(rawText: string) {
    rawText = rawText.replace(/o/g, "u");
    rawText = rawText.replace(/e/g, "i");

    rawText = rawText.replace(/nga/g, "\u1725");
    rawText = rawText.replace(/ngi/g, "\u1725\u1732");
    rawText = rawText.replace(/ngu/g, "\u1725\u1733");
    rawText = rawText.replace(/ng/g, "\u1725\u1734");

    rawText = rawText.replace(/ka/g, "\u1723");
    rawText = rawText.replace(/ga/g, "\u1724");
    rawText = rawText.replace(/ta/g, "\u1726");
    rawText = rawText.replace(/da/g, "\u1727");
    rawText = rawText.replace(/na/g, "\u1728");
    rawText = rawText.replace(/pa/g, "\u1729");
    rawText = rawText.replace(/ba/g, "\u172A");
    rawText = rawText.replace(/ma/g, "\u172B");
    rawText = rawText.replace(/ya/g, "\u172C");
    rawText = rawText.replace(/ra/g, "\u172D");
    rawText = rawText.replace(/la/g, "\u172E");
    rawText = rawText.replace(/wa/g, "\u172F");
    rawText = rawText.replace(/sa/g, "\u1730");
    rawText = rawText.replace(/ha/g, "\u1731");

    rawText = rawText.replace(/ki/g, "\u1723\u1732");
    rawText = rawText.replace(/gi/g, "\u1724\u1732");
    rawText = rawText.replace(/ti/g, "\u1726\u1732");
    rawText = rawText.replace(/di/g, "\u1727\u1732");
    rawText = rawText.replace(/ni/g, "\u1728\u1732");
    rawText = rawText.replace(/pi/g, "\u1729\u1732");
    rawText = rawText.replace(/bi/g, "\u172A\u1732");
    rawText = rawText.replace(/mi/g, "\u172B\u1732");
    rawText = rawText.replace(/yi/g, "\u172C\u1732");
    rawText = rawText.replace(/ri/g, "\u172D\u1732");
    rawText = rawText.replace(/li/g, "\u172E\u1732");
    rawText = rawText.replace(/wi/g, "\u172F\u1732");
    rawText = rawText.replace(/si/g, "\u1730\u1732");
    rawText = rawText.replace(/hi/g, "\u1731\u1732");

    rawText = rawText.replace(/ku/g, "\u1723\u1733");
    rawText = rawText.replace(/gu/g, "\u1724\u1733");
    rawText = rawText.replace(/tu/g, "\u1726\u1733");
    rawText = rawText.replace(/du/g, "\u1727\u1733");
    rawText = rawText.replace(/nu/g, "\u1728\u1733");
    rawText = rawText.replace(/pu/g, "\u1729\u1733");
    rawText = rawText.replace(/bu/g, "\u172A\u1733");
    rawText = rawText.replace(/mu/g, "\u172B\u1733");
    rawText = rawText.replace(/yu/g, "\u172C\u1733");
    rawText = rawText.replace(/ru/g, "\u172D\u1733");
    rawText = rawText.replace(/lu/g, "\u172E\u1733");
    rawText = rawText.replace(/wu/g, "\u172F\u1733");
    rawText = rawText.replace(/su/g, "\u1730\u1733");
    rawText = rawText.replace(/hu/g, "\u1731\u1733");

    rawText = rawText.replace(/k/g, "\u1723\u1734");
    rawText = rawText.replace(/g/g, "\u1724\u1734");

    rawText = rawText.replace(/t/g, "\u1726\u1734");
    rawText = rawText.replace(/d/g, "\u1727\u1734");
    rawText = rawText.replace(/n/g, "\u1728\u1734");
    rawText = rawText.replace(/p/g, "\u1729\u1734");
    rawText = rawText.replace(/b/g, "\u172A\u1734");
    rawText = rawText.replace(/m/g, "\u172B\u1734");
    rawText = rawText.replace(/y/g, "\u172C\u1734");
    rawText = rawText.replace(/r/g, "\u172D\u1734");
    rawText = rawText.replace(/l/g, "\u172E\u1734");
    rawText = rawText.replace(/w/g, "\u172F\u1734");
    rawText = rawText.replace(/s/g, "\u1730\u1734");
    rawText = rawText.replace(/h/g, "\u1731\u1734");

    rawText = rawText.replace(/a/g, "\u1720");
    rawText = rawText.replace(/i/g, "\u1721");
    rawText = rawText.replace(/u/g, "\u1722");

    setTranslatedText(rawText);
  }

  function buhidTranslate(rawText: string) {
    rawText = rawText.replace(/o/g, "u");
    rawText = rawText.replace(/e/g, "i");

    rawText = rawText.replace(/nga/g, "\u1745");
    rawText = rawText.replace(/ngi/g, "\u1745\u1752");
    rawText = rawText.replace(/ngu/g, "\u1745\u1753");
    rawText = rawText.replace(/ng/g, "");

    rawText = rawText.replace(/ka/g, "\u1743");
    rawText = rawText.replace(/ga/g, "\u1744");
    rawText = rawText.replace(/ta/g, "\u1746");
    rawText = rawText.replace(/da/g, "\u1747");
    rawText = rawText.replace(/na/g, "\u1748");
    rawText = rawText.replace(/pa/g, "\u1749");
    rawText = rawText.replace(/ba/g, "\u174A");
    rawText = rawText.replace(/ma/g, "\u174B");
    rawText = rawText.replace(/ya/g, "\u174C");
    rawText = rawText.replace(/ra/g, "\u174D");
    rawText = rawText.replace(/la/g, "\u174E");
    rawText = rawText.replace(/wa/g, "\u174F");
    rawText = rawText.replace(/sa/g, "\u1750");
    rawText = rawText.replace(/ha/g, "\u1751");

    rawText = rawText.replace(/ki/g, "\u1743\u1752");
    rawText = rawText.replace(/gi/g, "\u1744\u1752");
    rawText = rawText.replace(/ti/g, "\u1746\u1752");
    rawText = rawText.replace(/di/g, "\u1747\u1752");
    rawText = rawText.replace(/ni/g, "\u1748\u1752");
    rawText = rawText.replace(/pi/g, "\u1749\u1752");
    rawText = rawText.replace(/bi/g, "\u174A\u1752");
    rawText = rawText.replace(/mi/g, "\u174B\u1752");
    rawText = rawText.replace(/yi/g, "\u174C\u1752");
    rawText = rawText.replace(/ri/g, "\u174D\u1752");
    rawText = rawText.replace(/li/g, "\u174E\u1752");
    rawText = rawText.replace(/wi/g, "\u174F\u1752");
    rawText = rawText.replace(/si/g, "\u1750\u1752");
    rawText = rawText.replace(/hi/g, "\u1751\u1752");

    rawText = rawText.replace(/ku/g, "\u1743\u1753");
    rawText = rawText.replace(/gu/g, "\u1744\u1753");
    rawText = rawText.replace(/tu/g, "\u1746\u1753");
    rawText = rawText.replace(/du/g, "\u1747\u1753");
    rawText = rawText.replace(/nu/g, "\u1748\u1753");
    rawText = rawText.replace(/pu/g, "\u1749\u1753");
    rawText = rawText.replace(/bu/g, "\u174A\u1753");
    rawText = rawText.replace(/mu/g, "\u174B\u1753");
    rawText = rawText.replace(/yu/g, "\u174C\u1753");
    rawText = rawText.replace(/ru/g, "\u174D\u1753");
    rawText = rawText.replace(/lu/g, "\u174E\u1753");
    rawText = rawText.replace(/wu/g, "\u174F\u1753");
    rawText = rawText.replace(/su/g, "\u1750\u1753");
    rawText = rawText.replace(/hu/g, "\u1751\u1753");

    rawText = rawText.replace(/k/g, "");
    rawText = rawText.replace(/g/g, "");
    rawText = rawText.replace(/t/g, "");
    rawText = rawText.replace(/d/g, "");
    rawText = rawText.replace(/n/g, "");
    rawText = rawText.replace(/p/g, "");
    rawText = rawText.replace(/b/g, "");
    rawText = rawText.replace(/m/g, "");
    rawText = rawText.replace(/y/g, "");
    rawText = rawText.replace(/r/g, "");
    rawText = rawText.replace(/l/g, "");
    rawText = rawText.replace(/w/g, "");
    rawText = rawText.replace(/s/g, "");
    rawText = rawText.replace(/h/g, "");

    rawText = rawText.replace(/a/g, "\u1740");
    rawText = rawText.replace(/i/g, "\u1741");
    rawText = rawText.replace(/u/g, "\u1742");

    setTranslatedText(rawText);
  }

  function tagbanwaTranslate(rawText: string) {
    rawText = rawText.replace(/o/g, "u");
    rawText = rawText.replace(/e/g, "i");

    rawText = rawText.replace(/nga/g, "\u1765");
    rawText = rawText.replace(/ngi/g, "\u1765\u1772");
    rawText = rawText.replace(/ngu/g, "\u1765\u1773");
    rawText = rawText.replace(/ng/g, "");

    rawText = rawText.replace(/ka/g, "\u1763");
    rawText = rawText.replace(/ga/g, "\u1764");
    rawText = rawText.replace(/ta/g, "\u1766");
    rawText = rawText.replace(/da/g, "\u1767");
    rawText = rawText.replace(/na/g, "\u1768");
    rawText = rawText.replace(/pa/g, "\u1769");
    rawText = rawText.replace(/ba/g, "\u176A");
    rawText = rawText.replace(/ma/g, "\u176B");
    rawText = rawText.replace(/ya/g, "\u176C");
    rawText = rawText.replace(/ra/g, "");
    rawText = rawText.replace(/la/g, "\u176E");
    rawText = rawText.replace(/wa/g, "\u176F");
    rawText = rawText.replace(/sa/g, "\u1770");
    rawText = rawText.replace(/ha/g, "");

    rawText = rawText.replace(/ki/g, "\u1763\u1772");
    rawText = rawText.replace(/gi/g, "\u1764\u1772");
    rawText = rawText.replace(/ti/g, "\u1766\u1772");
    rawText = rawText.replace(/di/g, "\u1767\u1772");
    rawText = rawText.replace(/ni/g, "\u1768\u1772");
    rawText = rawText.replace(/pi/g, "\u1769\u1772");
    rawText = rawText.replace(/bi/g, "\u176A\u1772");
    rawText = rawText.replace(/mi/g, "\u176B\u1772");
    rawText = rawText.replace(/yi/g, "\u176C\u1772");
    rawText = rawText.replace(/ri/g, "");
    rawText = rawText.replace(/li/g, "\u176E\u1772");
    rawText = rawText.replace(/wi/g, "\u176F\u1772");
    rawText = rawText.replace(/si/g, "\u1770\u1772");
    rawText = rawText.replace(/hi/g, "");

    rawText = rawText.replace(/ku/g, "\u1763\u1773");
    rawText = rawText.replace(/gu/g, "\u1764\u1773");
    rawText = rawText.replace(/tu/g, "\u1766\u1773");
    rawText = rawText.replace(/du/g, "\u1767\u1773");
    rawText = rawText.replace(/nu/g, "\u1768\u1773");
    rawText = rawText.replace(/pu/g, "\u1769\u1773");
    rawText = rawText.replace(/bu/g, "\u176A\u1773");
    rawText = rawText.replace(/mu/g, "\u176B\u1773");
    rawText = rawText.replace(/yu/g, "\u176C\u1773");
    rawText = rawText.replace(/ru/g, "");
    rawText = rawText.replace(/lu/g, "\u176E\u1773");
    rawText = rawText.replace(/wu/g, "\u176F\u1773");
    rawText = rawText.replace(/su/g, "\u1770\u1773");
    rawText = rawText.replace(/hu/g, "");

    rawText = rawText.replace(/k/g, "");
    rawText = rawText.replace(/g/g, "");
    rawText = rawText.replace(/t/g, "");
    rawText = rawText.replace(/d/g, "");
    rawText = rawText.replace(/n/g, "");
    rawText = rawText.replace(/p/g, "");
    rawText = rawText.replace(/b/g, "");
    rawText = rawText.replace(/m/g, "");
    rawText = rawText.replace(/y/g, "");
    rawText = rawText.replace(/r/g, "");
    rawText = rawText.replace(/l/g, "");
    rawText = rawText.replace(/w/g, "");
    rawText = rawText.replace(/s/g, "");
    rawText = rawText.replace(/h/g, "");

    rawText = rawText.replace(/a/g, "\u1760");
    rawText = rawText.replace(/i/g, "\u1761");
    rawText = rawText.replace(/u/g, "\u1762");

    setTranslatedText(rawText);
  }

  const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let textValue = event.target.value.toLowerCase();
    translate(textValue, language);
  };

  const translate = (text: string, languageSel: string) => {
    setUntranslatedText(text);
    switch (languageSel) {
      case "font-baybayin":
        console.log(language);
        baybayinTranslate(text);
        break;
      case "font-tagbanwa":
        console.log("changed: tagbanwa");
        tagbanwaTranslate(text);
        break;

      case "font-hanunoo":
        console.log("changed: hanunoo");
        hanunooTranslate(text);
        break;

      case "font-buhid":
        console.log("changed: buhid");
        buhidTranslate(text);
        break;

      default:
        console.log("changed: baybayin default");
        baybayinTranslate(text);
        break;
    }
  };

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <main className="h-dvh flex flex-col">
      <div className="navbar bg-primary text-white">
        <div className="flex-1">
          <h4 className="text-white font-bold">PH Scripts V2</h4>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <select
        className="select select-ghost w-full md:w-fit"
        defaultValue="baybayin"
        onChange={changeLanguage}
      >
        <option disabled>Select Language</option>
        <option value={"font-baybayin"}>Tagalog to Baybayin</option>
        <option value={"font-hanunoo"}>Tagalog to Hanunoo</option>
        <option value={"font-tagbanwa"}>Tagalog to Tagbanwa</option>
        <option value={"font-buhid"}>Tagalog to Buhid</option>
      </select>
      <div className="flex flex-col grow md:flex-row md:p-0 md:container md:mx-auto md:h-fit md:grow-0 md:overflow-hidden	">
        {/* <h1>{language}</h1> */}
        {/* <div>I rendered {renderCount.current}</div> */}

        <div className="md:basis-full md:w-1/2 h-fit md:p-2 md:box-border">
          <div className="md:border-2 md:rounded-md md:h-80 bg-neutral md:border-neutral-green">
           
           <textarea
              id="untranslatedText"
              className="textarea h-[20vh] ghost w-full rounded-none text-2xl md:p-5 md:h-full  md:bg-neutral break-words"
              placeholder="Type"
              // value='test'
              onChange={handleText}
            ></textarea>
          </div>
        </div>
        <div className="grow md:basis-full md:w-1/2 md:p-2 bg-base-100 md:h-full ">
          <div className="md:border-2 md:rounded-md md:border-neutral-green h-full">
            <div
              id="translatedText"
              className={`textarea w-full h-full text-2xl rounded-none bg-dark-green text-white md:text-primary md:h-full  md:bg-neutral-green break-words ${language}`}
            >
              {translatedText}
            </div>
          </div>
        </div>
        {/* <button onClick={focusThis}>Test</button> */}
      </div>
    </main>
  );
}
