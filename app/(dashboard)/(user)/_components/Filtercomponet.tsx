import CustomDatePicker from '@/components/inputs/DatePicker'
import { CustomSelect } from '@/components/inputs/SelectFeild'
import TextFeild from '@/components/inputs/TextFeild'
import React from 'react'
import styles from '@/styles/users.module.scss';
import { Button } from '@/components/buttons/Buttons';

function Filtercomponent() {
  return (
    <div className={styles.filterDropdownContainer} >
      Filtercomponent
      <CustomSelect
        label="organization"
        items={["Lendsqr", "Irorun", "Lendsqr", "Irorun"]}
      />
      <CustomDatePicker />
      <TextFeild label="Username" placeholder="user" />
      <TextFeild label="Email" placeholder="email" />
      <TextFeild label="Phone Number" placeholder="Phone Number" />
      <CustomSelect
        label="Status"
        items={["Active", "Inactive", "Pending", "Blacklisted"]}
      />

      <div className={styles.filterButtonContainer}>
        <Button className={styles.resetButton}>Reset</Button>
        <Button>
          Filter
        </Button>

      </div>
    </div>
  );
}

export default Filtercomponent