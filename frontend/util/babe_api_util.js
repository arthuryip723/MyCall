export const fetchBabes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/babes'
  })
);
