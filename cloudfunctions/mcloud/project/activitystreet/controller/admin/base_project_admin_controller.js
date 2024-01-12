/**
 * Notes: 后台管理控制模块
 */

const BaseAdminController = require('../../../../framework/platform/controller/base_admin_controller.js');
const BaseProjectService = require('../../service/base_project_service.js');

class BaseProjectAdminController extends BaseAdminController {
	// TODO
	async initSetup() {
		let service = new BaseProjectService();
		await service.initSetup();
	}

}

module.exports = BaseProjectAdminController;