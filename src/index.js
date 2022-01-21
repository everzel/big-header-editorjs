import Icon from './svg/toolbox.svg';

/**
 * Big header tool
 */
export default class BigHead {
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
   * @returns {HTMLInputElement}
   */
  render() {
    const input = document.createElement('input');

    input.classList.add('cdx-input');
    input.classList.add('big-header');

    return input;
  }

  /**
   * @param blockContent
   * @returns {{text}}
   */
  save(blockContent) {
    return {
      text: blockContent.value
    };
  }
}