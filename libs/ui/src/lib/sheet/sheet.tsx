import React from 'react';
import Handsontable from 'handsontable';

/* eslint-disable-next-line */
export interface SheetProps {}

export const Sheet = React.forwardRef<Handsontable>((props: SheetProps, forwardedRef) => {
  const sheetRef = React.useRef<HTMLDivElement>();
  React.useEffect(
    function () {
      if (sheetRef) {
        const hot = new Handsontable(sheetRef.current, {
          data: Handsontable.helper.createEmptySpreadsheetData(2056, 2056),
          rowHeaders: true,
          colHeaders: true,
          dropdownMenu: true,
          width: '100%',
          height: '100%',
          rowHeights: 30,
          colWidths: 100,
          licenseKey: 'non-commercial-and-evaluation',
          manualColumnResize: true,
          manualRowResize: true,
        });
        if (forwardedRef) {
            switch (typeof forwardedRef) {
                case 'function':
                    forwardedRef(hot);
                    break;
                case 'object':
                    forwardedRef.current = hot;
                    break;
                default:
                    break;
            }
        }
        return hot.destroy;
      }
    },
    [forwardedRef, sheetRef]
  );

  return (
    <div style={{ flex: 1, width: 0 }}>
      <div ref={sheetRef} />
    </div>
  );
});

export default Sheet;
