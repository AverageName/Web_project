from django import forms


class ImageForm(forms.Form):
    Image = forms.ImageField(label="Load picture")
