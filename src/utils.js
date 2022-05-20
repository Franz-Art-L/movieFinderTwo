export const checkResponse = response => {
    if(response.ok) {
        return response;
    }
    throw new Error('Error is either 404 or 500');
};

export const json = response => response.json();

export const Footer = () => {
    return(
        <div className="my-4 text-center" style={{color: 'white'}}>
             <p className="text-center">API powered by<a href="https://omdbapi.com/" target="_blank"
      rel="noopener noreferrer"> www.omdbapi.com</a></p>
             <p>ReactJs practice by: </p>
             <p><a href="https://confident-murdock-8e5bba.netlify.app/" target="_blank" rel="noopener noreferrer">Francis Artemio Landia</a></p>
             <p><a href="https://www.altcademy.com/" target="_blank" rel="noopener noreferrer">Altcademy</a> Student</p>
             <span>2022</span>
        </div>
    );
};