import Image from 'next/image';

export default function Partner(props: any) {
    return (
        <div>
            <Image 
                src={props.ImageUrl} 
                alt={props.Alt} 
                width={500} 
                height={300} 
            />
        </div>
    );
}
