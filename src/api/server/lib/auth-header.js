import jwt from 'jsonwebtoken';
import serverConfigs from '../../../../config/server';

const cert = serverConfigs.jwtSecretKey;
class AuthHeader {
	constructor() {}

	encodeUserLoginAuth(userId) {
		return jwt.sign({ userId: userId }, cert);
	}

	decodeUserLoginAuth(token) {
		if (!token) return {};
		try {
			return jwt.verify(token, cert);
		} catch (error) {
			return {};
		}
	}

	encodeUserPassword(token) {
		return jwt.sign({ password: token }, cert);
	}

	decodeUserPassword(token) {
		return jwt.verify(token, cert);
	}
}
export default new AuthHeader();
