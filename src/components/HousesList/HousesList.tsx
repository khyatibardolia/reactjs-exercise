import {FC} from "react";
import {Card} from "../common/Card/Card";
import {Houses} from "../../hooks/types";
import styles from './HousesList.module.scss';

export type Props = {
    houses: Houses[];
}

export const HousesList: FC = ({houses}: Props) => {

    return <div className={styles['house_list_wrapper']}>
        {houses && houses.length && houses.map((house: Houses) => {
            return <Card
                         key={house.id}
                         header={
                             <div className={styles['house_list_wrapper__header']}>
                                 <span>{house.name}</span>
                                 <span>{house.animal}</span>
                             </div>
                         }
                         content={
                             <div className={styles['house_list_wrapper__content']}>
                                 <div>{/*Todo: show gradient bar*/}</div>
                                 <div className={styles['house_list_wrapper__content__founder']}>
                                     <span>Founder: </span>
                                     <span>{house.founder}</span>
                                 </div>
                             </div>
                         }/>
        })}
    </div>
}