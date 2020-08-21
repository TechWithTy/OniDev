import { Titlespan2,
} from '../components/common/title/index';
class Total extends React.Component {
    constructor() {
        super();

        this.state = {
            hours: 0,
            total: 0,
            ratePerHour: 10
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.hours !== this.props.hours) {
            // Calculate total
           this.props.totalFunc()
      }
    }

  render() {
    return <Titlespan2  Class="sitemain-subtitle"
            Name={this.props.total}/>;
  }
}


export default Total;