export const checkResponse = response => {
    if(response.ok) {
        return response;
    }
    throw new Error('Error is either 404 or 500');
};

export const json = response => response.json();

export const Footer = () => {
    return(
        <div className="py-2 my-4 text-center" style={{color: 'white'}}>
             <p>ReactJs practice by: </p>

             <p><a href="https://confident-murdock-8e5bba.netlify.app/" target="_blank" rel="noopener noreferrer">Francis Artemio Landia</a></p>
             <span>2022</span>
        </div>
    );
};