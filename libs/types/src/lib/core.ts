export type CellPosition = [number, number];
export type CellData = {
    code: string,
};
export type SheetData = Map<CellPosition, CellData>;
export type Sheets = Record<string, SheetData>;
export type ParsedFile = {
    sheets: Sheets,
};
