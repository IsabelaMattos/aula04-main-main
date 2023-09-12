import { Suspense } from "react";

export default async function ListUsers({users}) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <div>
            <Suspense fallback={<p>Carregando...</p>}>
                {users?.map((user, index) =>
                <p key={index}>
                    {user.name}
                </p>
                )}
            </Suspense>
        </div>
    );
}