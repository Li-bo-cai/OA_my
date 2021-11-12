import { RouteRecordRaw } from 'vue-router'
import { administrat_manage } from './moudle/administrat_manage.router'
import { bi_board } from './moudle/bi_board.router'
import { client_manage } from './moudle/client_manage.router'
import { dynamic } from './moudle/dynamic.router'
import { financial_manage } from './moudle/financial_manage.router'
import { legal_manage } from './moudle/legal_manage.router'
import { my_commission } from './moudle/my_commission.router'
import { oa_approve } from './moudle/oa_approve.router'
import { operations_manage } from './moudle/operations_manage.router'
import { organizat_manage } from './moudle/organizat_manage.router'
import { personnel_manage } from './moudle/personnel_manage.router'
import { project_manage } from './moudle/project_manage.router'
import { resource_admin } from './moudle/resource_admin.router'
import { schedule } from './moudle/schedule.router'
import { system_manage } from './moudle/system_manage.router'
import { user_center } from './moudle/user_center.router'
import { work_report } from './moudle/work_report.router'

export const asyncRoutes: Array<RouteRecordRaw> = [
    ...administrat_manage,
    ...bi_board,
    ...client_manage,
    ...dynamic,
    ...financial_manage,
    ...legal_manage,
    ...my_commission,
    ...oa_approve,
    ...operations_manage,
    ...organizat_manage,
    ...personnel_manage,
    ...project_manage,
    ...resource_admin,
    ...schedule,
    ...system_manage,
    ...user_center,
    ...work_report
]