import { characterImage } from '../paths';

class Portrait extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }
  render() {
    const { className, imageFile } = this.props;

    return (
      <div className={cn('characterlistitem__portrait', 'portrait', className)}>
        <img src={characterImage(imageFile)}/>
      </div>
    );
  }
}

Portrait.contextTypes = {
  imageFile: PropTypes.string,
  className: PropTypes.string,
};

export default Portrait
