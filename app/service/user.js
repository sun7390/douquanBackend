const Service = require('egg').Service;

class UserService extends Service {
    async findById(id) {
        const user = await this.app.mysql.get('users',{ id: id })
        return user;
    }
}

module.exports = UserService;