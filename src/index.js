import Icon from './svg/toolbox.svg';
import './index.css';

/**
 * Big header tool
 */
export default class BigHead {
  /**
   * @param data
   * @param config
   * @param api
   */
  constructor({ data, config, api }) {
    this.api = api;

    this.nodes = {
      text: null
    };

    /**
     * Set saved state
     */
    this.data = data;
  }

  /**
   * @returns {{icon: *, title: string}}
   */
  static get toolbox() {
    return {
      title: 'Big header',
      icon: Icon
    };
  }

  /**
   * @returns {{input: any}}
   * @constructor
   */
  get CSS() {
    return {
      input: 'big-header-cdx-input'
    };
  }

  /**
   * @param {HTMLElement} toolsContent
   * @returns {{text}}
   */
  save(toolsContent) {
    this.data.text = toolsContent.textContent;

    return this.data;
  }

  /**
   * @returns {HTMLInputElement}
   */
  render() {
    const { text } = this.data;

    this.nodes.text = this.make('div', this.CSS.input, {
      contentEditable: true
    });

    if (text) {
      this.nodes.text.textContent = text;
    }

    /*
     * this.nodes.text = this.make('input', this.CSS.input, {
     * contentEditable: true
     * });
     *
     * this.nodes.text.classList.add('big-header-cdx-input');
     *
     * if (text) {
     * this.nodes.text.textContent = text;
     * }
     *
     *return this.nodes.text;
     */

    return this.nodes.text;
  }

  /**
   * @param savedData
   * @returns {null|string|string|(() => Promise<string>)|(() => string)|*}
   */
  validate(savedData) {
    return savedData.text;
  }

  /**
   * @param tagName
   * @param classNames
   * @param attributes
   * @returns {*}
   */
  make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }
}