/** ข้อมูล mockup สำหรับ marquee — SVG จาก public/showcase/ */
export type ShowcaseMockup = {
  id: string;
  image: string;
};

function buildRow(imageNumbers: number[], rowKey: string): ShowcaseMockup[] {
  return imageNumbers.map((num) => ({
    id: `${rowKey}-${num}`,
    image: `/showcase/${num}.svg`,
  }));
}

/** แถวบน — เลื่อนซ้าย */
export const showcaseRowTop: ShowcaseMockup[] = buildRow(
  [1, 2, 3, 4, 5, 6, 7, 8],
  "top"
);

/** แถวล่าง — เลื่อนขวา */
export const showcaseRowBottom: ShowcaseMockup[] = buildRow(
  [9, 10, 11, 12, 13, 14, 15],
  "bottom"
);
