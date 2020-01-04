const middleware = {}

middleware['setCacheVersion'] = require('../middleware/setCacheVersion.js');
middleware['setCacheVersion'] = middleware['setCacheVersion'].default || middleware['setCacheVersion']

export default middleware
