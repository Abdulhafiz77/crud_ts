import { pgPoolQuery, StaffModel } from '..';

export class StaffRepository {

    static async getByLogin(login: string): Promise<StaffModel> {
        const sql = `select public.staff.*,
                            COALESCE(json_agg(DISTINCT sp.name)
                            FILTER (WHERE sp.name IS NOT NULL), '[]') AS "permissions",
                            r.all_permissions
                    from public.staff 
                        left join public.role_staff r on r.id = public.staff.role_id 
                        left join public.permissions_staff sp on sp.role_id = public.staff.role_id 
                        where public.staff.role_id = r.id and public.staff.login = $1
                        group by r.name, r.all_permissions, public.staff.id`
        const result = await pgPoolQuery(sql, [login]);

        if (!result.rows || result.rows.length === 0)
            return null as any;

        return result.rows[0]
    } }