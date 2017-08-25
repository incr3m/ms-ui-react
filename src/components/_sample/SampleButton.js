import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react'
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export default class SampleButton extends React.Component {
  static propTypes = {
    /** Description of prop "foo". */
    foo: PropTypes.number,
    /** Description of prop "baz". */
    baz: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
  };
  static defaultProps = {
    foo: 42,
  };

  render() {
    return (
			<Button>
                Click Here
            </Button>
		);
  }
}