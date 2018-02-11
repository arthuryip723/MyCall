export const fetchBabes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/babes'
  })
);

export const fetchBabe = id => (
	$.ajax({
		method: 'GET',
		url: `api/babes/${id}`
	})
);
