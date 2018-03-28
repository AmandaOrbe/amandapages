activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

my_pages = ["loud", "lorem", "lorem2", "lorem3"]
my_pages.each do |page|
  proxy "/#{page}.html", "/show.html", :locals => { :page => page },  ignore: true
end



activate :sprockets

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end
