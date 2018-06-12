class ApartmentPhotoUploader < CarrierWave::Uploader::Base
  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  # include CarrierWave::MiniMagick

  if Rails.env.test?
    storage :file
  else
    storage :fog
  end
#asdf
  # def serializable_hash
  #    model.read_attribute :image_url
  #  end

 #  def default_url(*args)
 #  #   # For Rails 3.1+ asset pipeline compatibility:
 # "/images/fallback/" + [version_name, "default.png"].compact.join('_')
 #    # 'https://heifetz.s3.amazonaws.com/uploads/apartment/thumbnail_photodefault.png'
 #    # 'https://heifetz.s3.amazonaws.com/default.png'
 #    # 'default.png'
 #
 #  end
  # Choose what kind of storage to use for this uploader:

  # storage :file

  # storage :fog

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  # {`/uploads/apartment/photo/${props.id}/${props.photo}`}
  # def default_url(*args)
  # #   # For Rails 3.1+ asset pipeline compatibility:
  # "/images/fallback/" + [version_name, "apt1photo1.jpeg"].compact.join('_')
  # end

  def default_url(*args)
  #   # For Rails 3.1+ asset pipeline compatibility:
  "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:


  # Process files as they are uploaded:
  # process scale: [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # Create different versions of your uploaded files:
  # version :thumb do
  #   process resize_to_fit: [50, 50]
  # end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:

  # def extension_whitelist
  #   %w(jpg jpeg gif png)
  # end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  # def filename
  #   "something.jpg" if original_filename
  # end
end
