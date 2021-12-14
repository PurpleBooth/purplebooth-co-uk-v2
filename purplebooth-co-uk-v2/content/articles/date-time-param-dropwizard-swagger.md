---
categories: ["Java", "Dropwizard", "Swagger"]
date: "2015-06-07T17:44:28+01:00"
description: "Example of how to make DateTimeParam not show up as unknown in swagger json. Might point you in the direction of doing more complicated things too."
title: "Correct parameter type for DateTimeParam in Dropwizard when using Swagger"
---

If you're using the [Swagger](https://github.com/federecio/dropwizard-swagger) bundle for [Dropwizard](https://www.dropwizard.io/) and also a [DateTimeParam](https://github.com/dropwizard/dropwizard/blob/master/dropwizard-jersey/src/main/java/io/dropwizard/jersey/params/DateTimeParam.java) you may have noticed that Swagger puts _unknown_ for this parameter in the _swagger.json_, when it should be a _date-time_. Here's how to resolve that.

We get _unknown_ because Swagger doesn't know how to represent a _DateTimeParam_ in it's output. We can tell Swagger how to interpret this class using a _ModelConverter_. _ModelConverters_ give swagger knowledge of how it should output classes, and allow us some degree of customization of swaggers output.

<pre class="code">
<code class="java">
package uk.co.purplebooth.someproject.configuration;

import com.wordnik.swagger.converter.ModelConverter;
import com.wordnik.swagger.converter.ModelConverterContext;
import com.wordnik.swagger.jackson.AbstractModelConverter;
import com.wordnik.swagger.models.properties.Property;
import com.wordnik.swagger.util.Json;
import io.dropwizard.jersey.params.DateTimeParam;

import java.lang.annotation.Annotation;
import java.lang.reflect.Type;
import java.util.Iterator;

public class SwaggerDateModelConverter extends AbstractModelConverter implements ModelConverter {

  public SwaggerDateModelConverter() {
    super(Json.mapper());
  }

  @Override
  public Property resolveProperty(Type type,
      ModelConverterContext context,
      Annotation[] annotations,
      Iterator<ModelConverter> chain) {
    Property assumedProperty = super.resolveProperty(type, context, annotations, chain);

    if (type.equals(DateTimeParam.class)) {
      return getPrimitiveProperty("datetime");
    }

    return assumedProperty;
  }

}

</code>
</pre>

Above is an example that allows you to output _DateTimeParam_ as _date-time_.

I'll break this down a little bit.

In the constructor we need to tell Swagger which output we're mapping to. This is what the _Json.mapper_ call is doing.

We've extended this class off _AbstractModelConverter_, which provides us with some useful functions to help us.

The _resolveProperty_ method is used to determine what sort of property a type is. We can do really complicated things here like handle classes without annotations, we only need something simple though.

We're going to call the parent class and resolve the property as normal. Then we're going to disregard it if the property we're resolving is a _DateTimeParam_. We'll then use the _getPrimitiveProperty_ method from the super class to give us the right parameter for a _datetime_ (The string _datetime_ returns a swagger _DateProperty_, which is in turn converted into the string _date-time_ in the Json).

Once you've done this, you simply need to add the converter to swagger.

<pre class="code">
<code class="java">
  /**
   * Run the web server. Adds endpoints.
   *
   * @param configuration Loaded configuration object
   * @param environment   Environment container
   */
  @Override
  public void run(SomeConfiguration configuration, Environment environment) {
    ModelConverters.getInstance().addConverter(new SwaggerDateModelConverter());
  }
</code>
</pre>

I hope this has saved you a little time Googling.
