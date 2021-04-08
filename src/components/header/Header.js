import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'header';

  toHTML() {
    return `
      <input class="input" type="text" value="Новая таблица">

      <div>
        <button class="button">
          <span class="material-icons">delete</span>
        </button>

        <button class="button">
          <span class="material-icons">exit_to_app</span>
        </button>
      </div>
    `;
  }
}
