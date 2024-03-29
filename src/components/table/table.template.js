const CODES = {
  A: 'A'.charCodeAt(0),
  Z: 'Z'.charCodeAt(0),
};

function toCell(content = '', index) {
  return `
    <div class="cell" data-col="${index}" contenteditable>${content}</div>
  `;
}

function toColumn(col, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `;
}

function createRow(index, content) {
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${index ? index : ''}
        ${index ? '<div class="row-resize" data-resize="row"></div>' : ''}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('');

  const cells = new Array(colsCount)
      .fill('')
      .map(toCell)
      .join('');

  rows.push(createRow(null, cols));

  for (let i = 1; i <= rowsCount; i++) {
    rows.push(createRow(i, cells));
  }
  return rows.join('');
}
