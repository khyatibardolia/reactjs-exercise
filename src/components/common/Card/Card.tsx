import {FC, ReactNode} from "react";
import styles from './Card.module.scss';

export type Props = {
    header: ReactNode;
    content: ReactNode;
}

export const Card: FC<Props> = ({header, content}: Props) => {
    return <div className={styles['card_wrapper']}>
        {header && <div className={styles['card_wrapper__header']}>
            {header}
        </div>}
        {content && <div className={styles['card_wrapper__content']}>
            {content}
        </div>}
    </div>
}