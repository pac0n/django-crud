(function(){

	const btnEliminar = document.querySelectorAll(".btnEliminar");

	btnEliminar.forEach(btn=>{
		btn.addEventListener('click', (e)=>{
			const confirmacion=confirm('¿Seguro que desea eliminar el curso?');
			if(!confirmacion){
				e.preventDefault();
			}
		});
	});
})();