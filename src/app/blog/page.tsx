
        export default async function BlogPage() {
            await new Promise((resolve) =>{
                setTimeout(() => {
                    resolve("intensional delay");
                }, 2000);
            });
              return <h1>blog Page</h1>;
        }