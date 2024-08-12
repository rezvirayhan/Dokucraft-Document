'use client';

import Link from "next/link";


const Logo = () => {
    return (
        <div className="lg:flex">
            <Link href="/">
                <img width={100}
                    height={100} src="https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P1_900x420?$pjpeg$&jpegSize=200&wid=900" alt="" />
            </Link>
        </div>
    );
};

export default Logo;