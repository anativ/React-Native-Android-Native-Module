// ImageView.js

var { requireNativeComponent, PropTypes } = require('react-native');

var iface = {
  name: 'MyImageView',
  propTypes: {
    src: PropTypes.string,
    borderRadius: PropTypes.number,
    resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch']),
    renderToHardwareTextureAndroid : PropTypes.bool,
    onLayout : PropTypes.bool,
    accessibilityLiveRegion :PropTypes.string,
    accessibilityComponentType :PropTypes.string,
    importantForAccessibility  :PropTypes.string,
    accessibilityLabel         :PropTypes.string,
    testID                     :PropTypes.string,
    // accessibilityLiveRegion :PropTypes.String,
    // accessibilityLiveRegion


  },
};

module.exports = requireNativeComponent('RCTImageView', iface);
