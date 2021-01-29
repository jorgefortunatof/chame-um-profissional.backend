'use strict';

class StoreAvatar {
	get rules() {
		return {
			avatar: 'file|file_ext:png,jpg|file_size:2mb|file_types:image',
		};
	}
}

module.exports = StoreAvatar;
