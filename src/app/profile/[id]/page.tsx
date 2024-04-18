export default function UserProfile({ params }: any) {

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-[460px] h-auto rounded-md px-8 py-12 bg-neutral-950 shadow-md">
                <h1 className="text-2xl">User Id is {params.id}</h1>
            </div>
        </div>
    )
}