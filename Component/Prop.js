import { green, purple } from '@material-ui/core/colors';
import { Style } from '@material-ui/icons';
import React from 'react';
import ContactCard from './ContactCard';

function Prop() {
    return (
        <div className="contacts">
            <ContactCard
                name="Mr .Nauman"
                imgUrl="https://picsum.photos/200/300"
                Phone="(212)555-2345"
                Email="mr.wishkas@nature.com"
            />
            <ContactCard
                name="Ms .Anila"
                imgUrl="https://picsum.photos/202/300"
                Phone="(212)555-2345"
                Email="mr.wishkas@nature.com"
            />
            <ContactCard
                name="Ms .Meena"
                imgUrl="https://picsum.photos/201/300"
                Phone="(212)555-2345"
                Email="mr.wishkas@nature.com"
            />
            <ContactCard
                name="Ms .Azqa"
                imgUrl="https://picsum.photos/200/301"
                Phone="(212)555-2345"
                Email="mr.wishkas@nature.com"
            />
            <ContactCard
                name="Mr .Imran"
                imgUrl="https://picsum.photos/200/400"
                Phone="(212)555-2345"
                Email="mr.wishkas@nature.com"
            />

        </div>
    )
}
export default Prop
