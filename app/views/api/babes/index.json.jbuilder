@babes.each do |babe|
  json.set! babe.id do
    json.partial! 'babe', babe: babe
  end
end
