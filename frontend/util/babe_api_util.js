export const fetchBabes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/babes',
  })
);

export const fetchBabe = id => (
  $.ajax({
    method: 'GET',
    url: `api/babes/${id}`,
  })
);

export const createBabe = data => (
  $.ajax({
    method: 'POST',
    url: 'api/babes',
    data
  })
);
