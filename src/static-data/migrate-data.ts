import { StaffModel } from "../models";
import { StaffRepository } from "../repository";
import { PasswordService } from "../utils";
const fs = require('fs')
let Staffs = JSON.parse(fs.readFileSync('staff.json', 'utf-8'))

export async function CreateData() {
    try {
        await craeteStaff();
    } catch (error) {
        console.log(error)
    }
}

async function craeteStaff() {
    const staff = await StaffRepository.getByLogin('SuperAdmin');
    if (!staff) {
        for (let i = 0; i < Staffs.length; i++) {
            const staff: StaffModel = Staffs[i];
            staff.password = PasswordService.generateBcrypt(Staffs[i].password)
            await StaffRepository.getByLogin(Staffs[i]);
        }

        console.log('Created Staff')
    }
}
