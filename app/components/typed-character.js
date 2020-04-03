import Component from '@glimmer/component';

export default class TypedCharacter extends Component {

  get isNewLine() {
    return this.args.character === '\n';
  }
}
