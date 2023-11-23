import useAuthStore from "@/store/useAuthStore";
import { Container, ImageSection, UserDetailsSection } from "./styled";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineCloudUpload } from "react-icons/ai";
import api from "@/services/api";

export default function UserSection() {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const [user] = useAuthStore(
        (state) => [
            state.user,
        ]
    );

    const [avatarUrl, setAvatarUrl] = useState(user && user.url_image)

    function handleFile(e: any) {
        let files = e.target.files
        if (files[0]) {
            const image = files[0]

            if (image.type === 'image/jpeg' || image.type === 'image/png') {
                api.patch("/user/me/", {
                    url_image: image
                }, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((resp) => {
                    toast.success("Imagem atualizada com sucesso")
                    setAvatarUrl(URL.createObjectURL(image))
                    return
                }).catch(err => {
                    toast.error("Erro ao atualizar imagem")
                })
            } else {
                toast.error('Tipo de imagem não permitido')
            }
        }
    }

    return (
        <>
            {isClient && (
                <Container>
                    <ImageSection>
                        <label className='label-avatar'>
                            <span>
                                <AiOutlineCloudUpload size={25} color='#000000' />
                            </span>


                            <input type='file' accept='image/png, image/jpeg' onChange={handleFile} /><br />

                            <Image alt="User image" style={{ borderRadius: '50%' }} width={60} height={60} src={avatarUrl === null ? `https://ui-avatars.com/api/?background=random&name=${user?.first_name}${user?.last_name}` : avatarUrl} priority />

                        </label>
                    </ImageSection>

                    <UserDetailsSection>
                        <h4>{user?.first_name} {user?.last_name}</h4>
                        <div className="divisor"></div>
                        <p>{user?.email}</p>
                    </UserDetailsSection>
                </Container>
            )}
        </>
    )
}