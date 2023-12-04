# TYPOLAB

디자인 시스템 제작자를 위한 글꼴 실험 웹, '타이포랩'
TYPOLAB is a Web for testing font pairs

key
Typography, Service Design, Web Design, UXUI

## structure

``
.
├── app
│   ├── about
│   │   └── page.tsx
│   ├── box
│   │   ├── designSys
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.module.css
│   ├── page.tsx
│   ├── pair
│   │   ├── page.module.css
│   │   └── page.tsx
│   └── search
│       ├── [fontName]
│       │   ├── page.module.css
│       │   └── page.tsx
│       └── page.tsx
├── components
│   ├── BackArrow.tsx
│   ├── FontCard.tsx
│   ├── Footer.tsx
│   ├── FullLine.tsx
│   ├── SearchInput.tsx
│   ├── SizedBox.tsx
│   ├── Wrapper.tsx
│   └── fontCard.module.css
├── containers
│   ├── box
│   │   ├── BoxCard.tsx
│   │   └── designSys
│   ├── main
│   │   ├── LineTxt.tsx
│   │   ├── MainBtns.tsx
│   │   ├── SearchInputSection.tsx
│   │   └── SearchSection.tsx
│   ├── pair
│   │   ├── BoxSection.tsx
│   │   ├── BoxSet.tsx
│   │   ├── FontDisplayBox.tsx
│   │   ├── FontSet.tsx
│   │   ├── KoreanFontList.tsx
│   │   ├── LatinRecRes.tsx
│   │   ├── PreviewBox.tsx
│   │   ├── SelectFontModal.tsx
│   │   ├── TagSection.tsx
│   │   ├── changeFont
│   │   │   └── page.tsx
│   │   └── fontInfoFromDBDummyData.ts
│   └── search
│       └── FontSetting.tsx
├── services
│   ├── apis
│   │   ├── getKoreanFontInfoDB.ts
│   │   ├── getKoreanFontList.ts
│   │   ├── getLatinFontInfoDB.ts
│   │   ├── googleFont.apis.ts
│   │   └── inferSimillarLatin.ts
│   ├── convertFontDBDatatoFontInfo.ts
│   └── putFontSetToBox.ts
└── types
    └── types.ts

``
